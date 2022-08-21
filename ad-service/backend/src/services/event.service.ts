import axios from 'axios';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Event, EventDocument } from "../models/event.schema";

@Injectable()
export class EventService {
    constructor(@InjectModel(Event.name) private eventModel: Model<EventDocument>) {}

    async createAndSendEventToPartner(event: Event): Promise<Event> {
        let filledEvent = {...event, date: new Date()}

        const newEvent = new this.eventModel(filledEvent);
        const partnerEndpoint = process.env.PARTNER_ENDPOINT;

        try {
            const sendEvent = async () => { await axios.post(partnerEndpoint, filledEvent) }
            await sendEvent()

            return newEvent.save()
        }
        catch (error) {
            // TODO logger
            console.log(error)
        }
    }
}