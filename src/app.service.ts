import { Injectable, Inject } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class AppService {
  constructor(@Inject('PG') private client: Client) {}

  getHello(): string {
    return 'Hello World!';
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.client.query('SELECT * FROM users', (err, res) => {
        console.error(err);
        console.log(res.rows);

        if (err) reject(err);
        resolve(res.rows);
      });
    });
  }
}
