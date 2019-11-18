import {Module} from "@nestjs/common";
import {PassportModule} from "@nestjs/passport";

import {UserModule} from "../user/user.module";
import {LocalStrategy} from "./local.strategy";
import {SessionSerializer} from "./session.serializer";
import {AuthController} from "./auth.controller";
import {GoogleStrategy} from "./google.strategy";
import {FacebookStrategy} from "./facebook.strategy";

@Module({
  imports: [UserModule, PassportModule],
  providers: [GoogleStrategy, FacebookStrategy, LocalStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
