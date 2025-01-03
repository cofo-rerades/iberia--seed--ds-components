import { TemplateResult } from 'lit';

declare global {
  interface Story<T> {
    (args: T): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
  }
}

export {};
