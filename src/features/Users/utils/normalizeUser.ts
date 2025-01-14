import { User } from "../hooks/useUsers.ts";

export const normalizeUser = (user): User => ({
  id: user.id,
  fullName: `${user.firstName} ${user.lastName}`,
  birthday: `${user.birthDate} (${user.age} years old)`,
  gender: user.gender,
  email: user.email,
  phone: user.phone,
  username: user.username,
  generalInfo: `Bloodgroup ${user.bloodGroup}; Height ${user.height}; Weight ${user.weight}; Hair color ${user.hair.color}`,
  ip: user.ip,
  macIp: user.macAddress,
  address: `${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}`,
  bank: user.bank.cardType,
  university: user.university,
  ein: user.ein,
  ssn: user.ssn,
});