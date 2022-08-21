import { Event } from "./models/event";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DataFactory, Seeder } from "nestjs-seeder";

@Injectable()
export class EventsSeeder implements Seeder {
    constructor(@InjectModel(Event.name) private readonly event: Model<Event>) {}

    async seed(): Promise<any> {
        const events = DataFactory.createForClass(Event).generate(10);

        return this.event.insertMany(events);
    }

    async drop(): Promise<any> {
        return this.event.deleteMany({});
    }
}