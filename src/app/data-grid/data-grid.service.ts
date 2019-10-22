import { Injectable } from '@angular/core';

@Injectable()
export class DataGridService {
  getDataSource(): any {
    return orders;
  }
}

export class Order {
  ID: number;
  orderNumber: number;
  orderDate: Date;
  saleAmount: number;
  terms: string;
  totalAmount: number;
  customerStoreState: string;
  customerStoreCity: string;
  employee: string;
}

const orders: Array<Order> = [{
  ID: 1,
  orderNumber: 35703,
  orderDate: new Date(2014, 3, 10),
  saleAmount: 11800,
  terms: '15 Days',
  totalAmount: 12175,
  customerStoreState: 'California',
  customerStoreCity: 'Los Angeles',
  employee: 'Harv Mudd'
}, {
  ID: 4,
  orderNumber: 35711,
  orderDate: new Date(2014, 0, 12),
  saleAmount: 16050,
  terms: '15 Days',
  totalAmount: 16550,
  customerStoreState: 'California',
  customerStoreCity: 'San Jose',
  employee: 'Jim Packard'
}, {
  ID: 5,
  orderNumber: 35714,
  orderDate: new Date(2014, 0, 22),
  saleAmount: 14750,
  terms: '15 Days',
  totalAmount: 15250,
  customerStoreState: 'Nevada',
  customerStoreCity: 'Las Vegas',
  employee: 'Harv Mudd'
}, {
  ID: 7,
  orderNumber: 35983,
  orderDate: new Date(2014, 1, 7),
  saleAmount: 3725,
  terms: '15 Days',
  totalAmount: 3850,
  customerStoreState: 'Colorado',
  customerStoreCity: 'Denver',
  employee: 'Todd Hoffman'
}, {
  ID: 9,
  orderNumber: 36987,
  orderDate: new Date(2014, 2, 11),
  saleAmount: 14200,
  terms: '15 Days',
  totalAmount: 14800,
  customerStoreState: 'Utah',
  customerStoreCity: 'Salt Lake City',
  employee: 'Clark Morgan'
}, {
  ID: 11,
  orderNumber: 38466,
  orderDate: new Date(2014, 2, 1),
  saleAmount: 7800,
  terms: '15 Days',
  totalAmount: 8200,
  customerStoreState: 'California',
  customerStoreCity: 'Los Angeles',
  employee: 'Harv Mudd'
}, {
  ID: 14,
  orderNumber: 39420,
  orderDate: new Date(2014, 1, 15),
  saleAmount: 20500,
  terms: '15 Days',
  totalAmount: 9100,
  customerStoreState: 'California',
  customerStoreCity: 'San Jose',
  employee: 'Jim Packard'
}, {
  ID: 15,
  orderNumber: 39874,
  orderDate: new Date(2014, 1, 4),
  saleAmount: 9050,
  terms: '30 Days',
  totalAmount: 19100,
  customerStoreState: 'Nevada',
  customerStoreCity: 'Las Vegas',
  employee: 'Harv Mudd'
}, {
  ID: 18,
  orderNumber: 42847,
  orderDate: new Date(2014, 1, 15),
  saleAmount: 20400,
  terms: '30 Days',
  totalAmount: 20800,
  customerStoreState: 'Wyoming',
  customerStoreCity: 'Casper',
  employee: 'Todd Hoffman'
}, {
  ID: 19,
  orderNumber: 43982,
  orderDate: new Date(2014, 4, 29),
  saleAmount: 6050,
  terms: '30 Days',
  totalAmount: 6250,
  customerStoreState: 'Utah',
  customerStoreCity: 'Salt Lake City',
  employee: 'Clark Morgan'
}, {
  ID: 29,
  orderNumber: 56272,
  orderDate: new Date(2014, 1, 6),
  saleAmount: 15850,
  terms: '30 Days',
  totalAmount: 16350,
  customerStoreState: 'Utah',
  customerStoreCity: 'Salt Lake City',
  employee: 'Clark Morgan'
}, {
  ID: 30,
  orderNumber: 57429,
  orderDate: new Date(2013, 11, 31),
  saleAmount: 11050,
  terms: '30 Days',
  totalAmount: 11400,
  customerStoreState: 'Arizona',
  customerStoreCity: 'Phoenix',
  employee: 'Clark Morgan'
}, {
  ID: 32,
  orderNumber: 58292,
  orderDate: new Date(2014, 4, 13),
  saleAmount: 13500,
  terms: '15 Days',
  totalAmount: 13800,
  customerStoreState: 'California',
  customerStoreCity: 'Los Angeles',
  employee: 'Harv Mudd'
}, {
  ID: 36,
  orderNumber: 62427,
  orderDate: new Date(2014, 0, 27),
  saleAmount: 23500,
  terms: '15 Days',
  totalAmount: 24000,
  customerStoreState: 'Nevada',
  customerStoreCity: 'Las Vegas',
  employee: 'Harv Mudd'
}, {
  ID: 39,
  orderNumber: 65977,
  orderDate: new Date(2014, 1, 5),
  saleAmount: 2550,
  terms: '15 Days',
  totalAmount: 2625,
  customerStoreState: 'Wyoming',
  customerStoreCity: 'Casper',
  employee: 'Todd Hoffman'
}, {
  ID: 40,
  orderNumber: 66947,
  orderDate: new Date(2014, 2, 23),
  saleAmount: 3500,
  terms: '15 Days',
  totalAmount: 3600,
  customerStoreState: 'Utah',
  customerStoreCity: 'Salt Lake City',
  employee: 'Clark Morgan'
}, {
  ID: 42,
  orderNumber: 68428,
  orderDate: new Date(2014, 3, 10),
  saleAmount: 10500,
  terms: '15 Days',
  totalAmount: 10900,
  customerStoreState: 'California',
  customerStoreCity: 'Los Angeles',
  employee: 'Harv Mudd'
}, {
  ID: 43,
  orderNumber: 69477,
  orderDate: new Date(2014, 2, 9),
  saleAmount: 14200,
  terms: '15 Days',
  totalAmount: 14500,
  customerStoreState: 'California',
  customerStoreCity: 'Anaheim',
  employee: 'Harv Mudd'
}, {
  ID: 46,
  orderNumber: 72947,
  orderDate: new Date(2014, 0, 14),
  saleAmount: 13350,
  terms: '30 Days',
  totalAmount: 13650,
  customerStoreState: 'Nevada',
  customerStoreCity: 'Las Vegas',
  employee: 'Harv Mudd'
}, {
  ID: 47,
  orderNumber: 73088,
  orderDate: new Date(2014, 2, 25),
  saleAmount: 8600,
  terms: '30 Days',
  totalAmount: 8850,
  customerStoreState: 'Nevada',
  customerStoreCity: 'Reno',
  employee: 'Clark Morgan'
}, {
  ID: 50,
  orderNumber: 76927,
  orderDate: new Date(2014, 3, 27),
  saleAmount: 9800,
  terms: '30 Days',
  totalAmount: 10050,
  customerStoreState: 'Utah',
  customerStoreCity: 'Salt Lake City',
  employee: 'Clark Morgan'
}, {
  ID: 51,
  orderNumber: 77297,
  orderDate: new Date(2014, 3, 30),
  saleAmount: 10850,
  terms: '30 Days',
  totalAmount: 11100,
  customerStoreState: 'Arizona',
  customerStoreCity: 'Phoenix',
  employee: 'Clark Morgan'
}, {
  ID: 56,
  orderNumber: 84744,
  orderDate: new Date(2014, 1, 10),
  saleAmount: 4650,
  terms: '30 Days',
  totalAmount: 4750,
  customerStoreState: 'Nevada',
  customerStoreCity: 'Las Vegas',
  employee: 'Harv Mudd'
}, {
  ID: 57,
  orderNumber: 85028,
  orderDate: new Date(2014, 4, 17),
  saleAmount: 2575,
  terms: '30 Days',
  totalAmount: 2625,
  customerStoreState: 'Nevada',
  customerStoreCity: 'Reno',
  employee: 'Clark Morgan'
}, {
  ID: 59,
  orderNumber: 87297,
  orderDate: new Date(2014, 3, 21),
  saleAmount: 14200,
  terms: '30 Days',
  totalAmount: 0,
  customerStoreState: 'Wyoming',
  customerStoreCity: 'Casper',
  employee: 'Todd Hoffman'
}, {
  ID: 60,
  orderNumber: 88027,
  orderDate: new Date(2014, 1, 14),
  saleAmount: 13650,
  terms: '30 Days',
  totalAmount: 14050,
  customerStoreState: 'Utah',
  customerStoreCity: 'Salt Lake City',
  employee: 'Clark Morgan'
}, {
  ID: 65,
  orderNumber: 94726,
  orderDate: new Date(2014, 4, 22),
  saleAmount: 20500,
  terms: '15 Days',
  totalAmount: 20800,
  customerStoreState: 'California',
  customerStoreCity: 'San Jose',
  employee: 'Jim Packard'
}, {
  ID: 66,
  orderNumber: 95266,
  orderDate: new Date(2014, 2, 10),
  saleAmount: 9050,
  terms: '15 Days',
  totalAmount: 9250,
  customerStoreState: 'Nevada',
  customerStoreCity: 'Las Vegas',
  employee: 'Harv Mudd'
}, {
  ID: 69,
  orderNumber: 98477,
  orderDate: new Date(2014, 0, 1),
  saleAmount: 23500,
  terms: '15 Days',
  totalAmount: 23800,
  customerStoreState: 'Wyoming',
  customerStoreCity: 'Casper',
  employee: 'Todd Hoffman'
}, {
  ID: 70,
  orderNumber: 99247,
  orderDate: new Date(2014, 1, 8),
  saleAmount: 2100,
  terms: '15 Days',
  totalAmount: 2150,
  customerStoreState: 'Utah',
  customerStoreCity: 'Salt Lake City',
  employee: 'Clark Morgan'
}, {
  ID: 78,
  orderNumber: 174884,
  orderDate: new Date(2014, 3, 10),
  saleAmount: 7200,
  terms: '30 Days',
  totalAmount: 7350,
  customerStoreState: 'Colorado',
  customerStoreCity: 'Denver',
  employee: 'Todd Hoffman'
}, {
  ID: 81,
  orderNumber: 188877,
  orderDate: new Date(2014, 1, 11),
  saleAmount: 8750,
  terms: '30 Days',
  totalAmount: 8900,
  customerStoreState: 'Arizona',
  customerStoreCity: 'Phoenix',
  employee: 'Clark Morgan'
}, {
  ID: 82,
  orderNumber: 191883,
  orderDate: new Date(2014, 1, 5),
  saleAmount: 9900,
  terms: '30 Days',
  totalAmount: 10150,
  customerStoreState: 'California',
  customerStoreCity: 'Los Angeles',
  employee: 'Harv Mudd'
}, {
  ID: 83,
  orderNumber: 192474,
  orderDate: new Date(2014, 0, 21),
  saleAmount: 12800,
  terms: '30 Days',
  totalAmount: 13100,
  customerStoreState: 'California',
  customerStoreCity: 'Anaheim',
  employee: 'Harv Mudd'
}, {
  ID: 84,
  orderNumber: 193847,
  orderDate: new Date(2014, 2, 21),
  saleAmount: 14100,
  terms: '30 Days',
  totalAmount: 14350,
  customerStoreState: 'California',
  customerStoreCity: 'San Diego',
  employee: 'Harv Mudd'
}, {
  ID: 85,
  orderNumber: 194877,
  orderDate: new Date(2014, 2, 6),
  saleAmount: 4750,
  terms: '30 Days',
  totalAmount: 4950,
  customerStoreState: 'California',
  customerStoreCity: 'San Jose',
  employee: 'Jim Packard'
}, {
  ID: 86,
  orderNumber: 195746,
  orderDate: new Date(2014, 4, 26),
  saleAmount: 9050,
  terms: '30 Days',
  totalAmount: 9250,
  customerStoreState: 'Nevada',
  customerStoreCity: 'Las Vegas',
  employee: 'Harv Mudd'
}, {
  ID: 87,
  orderNumber: 197474,
  orderDate: new Date(2014, 2, 2),
  saleAmount: 6400,
  terms: '30 Days',
  totalAmount: 6600,
  customerStoreState: 'Nevada',
  customerStoreCity: 'Reno',
  employee: 'Clark Morgan'
}, {
  ID: 88,
  orderNumber: 198746,
  orderDate: new Date(2014, 4, 9),
  saleAmount: 15700,
  terms: '30 Days',
  totalAmount: 16050,
  customerStoreState: 'Colorado',
  customerStoreCity: 'Denver',
  employee: 'Todd Hoffman'
}, {
  ID: 91,
  orderNumber: 214222,
  orderDate: new Date(2014, 1, 8),
  saleAmount: 11050,
  terms: '30 Days',
  totalAmount: 11250,
  customerStoreState: 'Arizona',
  customerStoreCity: 'Phoenix',
  employee: 'Clark Morgan'
}];
