import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1682974451136 implements MigrationInterface {
    name = 'Migration1682974451136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "date_birth" TIMESTAMP, "phone" character varying(12), "address" character varying(255), "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "departments" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "father_id" integer, CONSTRAINT "PK_839517a681a86bb84cbcc6a1e9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "departments_users" ("id" SERIAL NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "department_id" integer, "user_id" integer, CONSTRAINT "PK_7c9de833044777d822bd0300c87" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "departments" ADD CONSTRAINT "FK_3534e8d33ce5f67048929a8bace" FOREIGN KEY ("father_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "departments_users" ADD CONSTRAINT "FK_d1fd883d210abff1109645268f4" FOREIGN KEY ("department_id") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "departments_users" ADD CONSTRAINT "FK_e77268cbb031688beddd37b912d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "departments_users" DROP CONSTRAINT "FK_e77268cbb031688beddd37b912d"`);
        await queryRunner.query(`ALTER TABLE "departments_users" DROP CONSTRAINT "FK_d1fd883d210abff1109645268f4"`);
        await queryRunner.query(`ALTER TABLE "departments" DROP CONSTRAINT "FK_3534e8d33ce5f67048929a8bace"`);
        await queryRunner.query(`DROP TABLE "departments_users"`);
        await queryRunner.query(`DROP TABLE "departments"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
