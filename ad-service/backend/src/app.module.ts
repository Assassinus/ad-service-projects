require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { EventController } from './controllers/event.controller';
import { Event, EventSchema } from "./models/event.schema";
import { EventService } from "./services/event.service";

@Module({
            imports: [
                MongooseModule.forRoot(process.env.MONGO_URI),
                MongooseModule.forFeature([{name: Event.name, schema: EventSchema}])
            ],
            controllers: [EventController],
            providers: [EventService],
        })

export class AppModule {}