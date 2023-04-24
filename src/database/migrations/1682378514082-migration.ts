import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1682378514082 implements MigrationInterface {
    name = 'Migration1682378514082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "departments" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "fatherId" integer, CONSTRAINT "PK_839517a681a86bb84cbcc6a1e9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "departments" ADD CONSTRAINT "FK_b6d516adb2d6cd3c5374870ba49" FOREIGN KEY ("fatherId") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "departments" DROP CONSTRAINT "FK_b6d516adb2d6cd3c5374870ba49"`);
        await queryRunner.query(`DROP TABLE "departments"`);
    }

}
