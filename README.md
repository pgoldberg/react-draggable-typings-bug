Because of the way the typings in `react-draggable` are set up, if two copies of
`react-draggable` end up in a package's `node_modules`, then the global
namespace declaration in the typings causes the types to be overridden to a
single set of types, rather than the typings for the corresponding version being
applied correctly.

```bash
$ pnpm compile

> react-draggable-typings-bug@0.0.0 compile /Volumes/git/react-draggable-typings-bug
> "$npm_execpath" recursive run compile

Scope: 2 of 3 workspace projects
packages/dep compile$ tsc -p .
packages/dep compile: Done
packages/app compile$ tsc -p .
packages/app compile: src/index.ts(6,14): error TS2322: Type '(_e: MouseEvent, _data: DraggableData) => void' is not assignable to type 'DraggableEventHandler'.
packages/app compile:   Types of parameters '_e' and 'e' are incompatible.
packages/app compile:     Type 'DraggableEvent' is not assignable to type 'MouseEvent'.
packages/app compile:       Type 'MouseEvent<HTMLElement | SVGElement, MouseEvent>' is missing the following properties from type 'MouseEvent': offsetX, offsetY, x, y, and 14 more.
packages/app compile: Failed
undefined
/Volumes/git/react-draggable-typings-bug/packages/app:
 ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  app@0.0.0 compile: `tsc -p .`
Exit status 2
 ELIFECYCLE  Command failed with exit code 1.

```