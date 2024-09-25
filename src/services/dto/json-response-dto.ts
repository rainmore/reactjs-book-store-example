export interface JsonResponseDto<Type> {
  data?: Type;
  messages: string[];
  timestamp: string;
}
