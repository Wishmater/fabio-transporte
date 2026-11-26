// See https://kit.svelte.dev/docs/types#app

import type { HttpError, RequestEvent } from '@sveltejs/kit';

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			passByHandleError: boolean | undefined;
			error: HttpError | undefined;
			startTimer: number;
			isApiCall: boolean | undefined;
			sessionUser: User | undefined;
		}
	}
}

export { };
