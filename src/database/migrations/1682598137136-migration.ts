import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1682598137136 implements MigrationInterface {
    name = 'Migration1682598137136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "dateBirth" TIMESTAMP, "phone" character varying(12), "address" character varying(255), "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "department" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "fatherId" integer, CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "department_user" ("id" SERIAL NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "departmentId" integer, "userId" integer, CONSTRAINT "PK_9104d98173511557613e7ef99be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_68c11daf814c0de89d5a7450654" FOREIGN KEY ("fatherId") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "department_user" ADD CONSTRAINT "FK_b6958ab69e73b2cecae31295987" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "department_user" ADD CONSTRAINT "FK_04f2632f47cc44655060342efd9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "department_user" DROP CONSTRAINT "FK_04f2632f47cc44655060342efd9"`);
        await queryRunner.query(`ALTER TABLE "department_user" DROP CONSTRAINT "FK_b6958ab69e73b2cecae31295987"`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_68c11daf814c0de89d5a7450654"`);
        await queryRunner.query(`DROP TABLE "department_user"`);
        await queryRunner.query(`DROP TABLE "department"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
