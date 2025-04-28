import * as compat from './compat.ts';
import { Mutex } from '../promise/mutex.ts';

type ToolkitFn = (value: any) => any;

type Compat = typeof compat;

interface Toolkit extends ToolkitFn, Compat {
  Mutex: typeof Mutex;
}

// Cast the initial function to the combined Toolkit type
export const toolkit: Toolkit = ((value: any) => {
  return value;
}) as Toolkit;

// Assign properties from compat module
Object.assign(toolkit, compat);

// Assign Mutex separately
toolkit.Mutex = Mutex;

// Set the placeholder for partial and partialRight
toolkit.partial.placeholder = toolkit;
toolkit.partialRight.placeholder = toolkit;
