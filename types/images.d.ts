// Importing an image gives Next the dimensions it needs to reserve the space and
// to generate the blurred placeholder, and the module declarations for that come
// from next-env.d.ts, which Next writes during a build and this repository does
// not commit. The type check runs before anything is built, so it needs them from
// a file that is always present.
/// <reference types="next/image-types/global" />
