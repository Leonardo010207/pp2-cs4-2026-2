import { prisma } from "../database/client";

import type { CreateCarDto } from "../dto/car/createCarDto";
import type { UpdateCarDto } from "../dto/car/updateCarDto";

// Cria um novo cliente na tabela
export function create(data: CreateCarDto) {
  return prisma.car.create({
    data,
  });
}

// Encontra um cliente na tabela por seu id
export function findById(id: number) {
  return prisma.car.findUnique({
    where: { id },
  });
}

// Lista todos os clientes da tabela
export function findAll() {
  return prisma.car.findMany({
    orderBy: {
      id: "asc",
    },
  });
}

// Atualiza os dados de um cliente, buscando-o pelo id
export function update(id: number, data: UpdateCarDto) {
  return prisma.car.update({
    where: { id },
    data,
  });
}

// Exclui um cliente da tabela, buscando-o por seu id
export function remove(id: number) {
  return prisma.car.delete({
    where: { id },
  });
}
