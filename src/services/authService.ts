import { prisma } from "../config/db";
import { generateToken } from "../utils/jwtUtils";
import { comparePassword, hashPassword } from "../utils/passwordUtils";

export const register = async (email: string, password: string) => {
  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });
  const token = generateToken(user.id);
  return { user, token };
};

export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid Credentials");
  const isPasswordMatched = await comparePassword(password, user.password);
  if (!isPasswordMatched) throw new Error("Invalid Credentials");

  const token = generateToken(user.id);
  return { user, token };
};
