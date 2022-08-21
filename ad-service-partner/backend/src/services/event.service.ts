import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Event, EventDocument } from "../models/event";

@Injectable()
export class EventService {

    constructor(@InjectModel(Event.name) private eventModel: Model<EventDocument>) {}

    async createEvent(event: Event): Promise<Event> {
        const newEvent = new this.eventModel(event);

        return newEvent.save();
    }

    async getEventsForChart() {
        let events = await this.eventModel.aggregate([
             {
                 $group: {
                     _id: {
                         date: {
                             $dateToString: {
                                 format: "%Y-%m-%d",
                                 date: "$date"
                             }
                         }, type: "$type"
                     },
                     value: {$sum: "$value"}
                 }
             },
             {
                 $sort: {'_id.date': 1}
             }
         ]);

        let preparedToChartEvents = events.map(function (event) {
            return {date: event["_id"].date, type: event["_id"].type, value: event.value}
        })

        return preparedToChartEvents.flat();
    }
}