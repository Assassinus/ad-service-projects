import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { EventService } from "../services/event.service";
import { Event } from "../models/event.schema";

@Controller('/api/event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Post('/send')
    // TODO api-middleware with token check
    async sendEventToPartner(@Res() response, @Body() event: Event) {
        try {
            const succeedEvent = await this.eventService.createAndSendEventToPartner(event)

            return response.status(HttpStatus.CREATED).json({createEvent: succeedEvent})
        }
        catch (error) {
            console.log(error)
        }
    }
}