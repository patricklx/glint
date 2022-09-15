import { DirectInvokable, EmptyObject } from '@glint/template/-private/integration';

export type ModifierKeyword = DirectInvokable<{
    <T extends keyof Registry>(args: EmptyObject, value: T): T extends keyof Registry ? Registry[T] : never
  }>;
