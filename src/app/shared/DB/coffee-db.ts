import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Coffee } from 'src/app/coffee/models';
import { OrderHistory } from 'src/app/history/modals';
import { Order } from 'src/app/order/models';

export class AppDb implements InMemoryDbService {
  createDb() {
    let coffee: Coffee[] = [
      {
        id: 1,
        title: 'cappuccino',
        price: '5.89',
        size: 'small',
        description: `he combination of coffee, milk and palm sugar makes this drink
      ave a delicious.`,
        imageSrc: `https://source.unsplash.com/ZLqxSzvVr7I/200x200`,
      },

      // {id:2, title:"cappuccino", price:"8.89", size:'large', description:`he combination of coffee, milk and palm sugar makes this drink
      // ave a delicious.`, imageSrc:'./src/assets/images/cappuccino-200.png'},

      {
        id: 3,
        title: 'Coffee Latte',
        price: '6.22',
        size: 'small',
        description: `this caffe latte or coffee lotte is one of the popular types of milk coffee`,
        imageSrc: 'https://source.unsplash.com/FzdEbrA3Qj0/200x200',
      },

      // {id:4, title:"Coffee Latte", price:"9.22", size:'large', description:`this caffe latte or coffee lotte is one of the popular types of milk coffee`, imageSrc:''},

      {
        id: 5,
        title: 'americano',
        price: '4.35',
        size: 'small',
        description: `Americano coffee is espresso drink combined with hot water`,
        imageSrc: 'https://source.unsplash.com/xO9NotFY4mU/200x200',
      },

      // {id:6, title:"americano", price:"7.35", size:'large', description:`Americano coffee is espresso drink combined with hot water`, imageSrc:''},

      {
        id: 7,
        title: 'v60',
        price: '5.50',
        size: 'small',
        description:
          'the v60 technique is one of the most used techniques by barista.',
        imageSrc: 'https://source.unsplash.com/hmLY7GiNFyE/200x200',
      },

      // {id:7, title:"v60", price:"9.50", size:'large', description:'the v60 technique is one of the most used techniques by barista.', imageSrc:''},
    ];

    let orders: Order[] = [];
    let history: OrderHistory[] = [
      OrderHistory.createOrderHistory(new Date(2023,10,3).toLocaleString(), {
        orderId: '#16963626120320',
        channel: 'delivery',
        items: [
          {
            id: 2,
            imageSrc: '',
            name: 'coffee latte',
            quantity: 1,
            unitPrice: 6.22,
            totalPrice: 6.22,
            size: 'small',
          },

          {
            id: 1,
            imageSrc: '',
            name: 'cappuccino',
            quantity: 1,
            unitPrice: 5.89,
            totalPrice: 5.89,
            size: 'small',
          },
        ],
        total: 12.11,
        discount: 0,
        totalAfterDiscount: 12.11,
      }),
    ];

    return { coffee, orders, history };
  }
}
