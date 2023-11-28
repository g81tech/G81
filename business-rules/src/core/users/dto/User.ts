import { PlatformProps } from "../../platforms/dto/Platform";

export interface UserProps {
    id?: string;
    name: string;
    platforms: PlatformProps[];
}
