// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NOVO": "NOVO",
  "PREPARANDO": "PREPARANDO",
  "PRONTO_PARA_RECOLHA": "PRONTO_PARA_RECOLHA",
  "RECOLHIDO": "RECOLHIDO",
  "CONCLUIDO": "CONCLUIDO"
};

const { Basket, BasketDish, Dish, OrderDish, Order, Restaurant, User } = initSchema(schema);

export {
  Basket,
  BasketDish,
  Dish,
  OrderDish,
  Order,
  Restaurant,
  User,
  OrderStatus
};