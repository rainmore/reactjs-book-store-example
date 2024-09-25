export interface JsonResponse<Type> {
  data?: Type;
  messages: string[];
  timestamp: string;
}
