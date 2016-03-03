// Compiled using typings@0.6.8
// Source: local-typings\react-router-redux.d.ts
// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/remojansen/DefinitelyTyped/8968dd3385d63cc8552ae3259bf0cfe7acd2f954/react-router-redux/react-router-redux.d.ts
// Type definitions for react-router-redux v4.0.0
// Project: https://github.com/rackt/react-router-redux
// Definitions by: Isman Usoh <http://github.com/isman-usoh>, Noah Shipley <https://github.com/noah79>, Dimitri Rosenberg <https://github.com/rosendi>, Remo H. Jansen <https://github.com/remojansen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "react-router-redux" {

    interface RouterAction {
        type: string;
        playload: any;
    }

    interface RouterActions {
        push: (actionType: string) => RouterAction;
        replace: (actionType: string) => RouterAction;
        go: (actionType: number) => RouterAction;
        goBack: () => RouterAction;
        goForward: () => RouterAction;
    }

    interface DefaultSelectLocationState extends Function {
        (state: any): any;
    }

    interface SyncHistoryWithStoreOptions {
        selectLocationState?: DefaultSelectLocationState;
        adjustUrlOnReplay?: boolean;
    }

    interface HistoryMiddleware extends Redux.Middleware {
        listen(listener: Function): () => void;
        unsubscribe(): void;
    }

    export var syncHistoryWithStore: (
        history: ReactRouter.History,
        store: Redux.Store,
        options?: SyncHistoryWithStoreOptions) => any;

    export var LOCATION_CHANGE: string;
    export var routerReducer: Redux.Reducer;
    export var CALL_HISTORY_METHOD: string;
    export var push: (actionType: string) => RouterAction;
    export var replace: (actionType: string) => RouterAction;
    export var go: (actionType: number) => RouterAction;
    export var goBack: () => RouterAction;
    export var goForward: () => RouterAction;
    export var routerActions: RouterActions;
    export var routerMiddleware: (history: ReactRouter.History) => Redux.Middleware;
}