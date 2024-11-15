export type ServerErrorProps = {
  name: string;
  message?: string;
  stack?: string;
  code: number;
};

class ServerError extends Error {
  name: string;
  message: string;
  stack: string;
  code: number;

  constructor({ name, message, stack, code }: ServerErrorProps) {
    super();
    this.name = name;
    this.message = message;
    this.code = code;
    this.stack = stack;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ServerError;
