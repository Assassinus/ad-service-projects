import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { Event } from "../models/event";
import { EventService } from "../services/event.service";

@Controller('/api/event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Get('/chart')
    async getEventsForChart(@Res() response) {
        const events = await this.eventService.getEventsForChart();

        return response.status(HttpStatus.OK).json({events})
    }

    @Post()
    async createEvent(@Res() response, @Body() event: Event) {
        const newEvent = await this.eventService.createEvent(event);

        return response.status(HttpStatus.CREATED).json({newEvent})
    }
}