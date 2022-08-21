import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EventDocument = Event & Document;

@Schema()
export class Event {

    @Prop({required: true})
    type: string

    @Prop()
    date: Date

    @Prop()
    value: number
}

export const EventSchema = SchemaFactory.createForClass(Event);