import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Factory } from "nestjs-seeder";

export type EventDocument = Event & Document;

@Schema()
export class Event {
    @Factory(faker => faker.random.arrayElement(["install", "pay"]))
    @Prop({required: true})
    type: string;

    @Factory(faker => faker.random.number(400))
    @Prop()
    value: number;

    @Factory(faker => faker.date.between('2022-08-20', '2022-10-31', 1))
    @Prop()
    date: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);