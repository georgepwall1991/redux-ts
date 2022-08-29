interface IRepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[]
}
interface ISearchRepositoriesAction {
    type: 'search_repositories';
}

interface ISearchRepositoriesSuccessAction {
    type: 'search_repositories_success';
    payload: string[];
}

interface ISearchRepositoriesErrorAction {
    type: 'search_repositories_error';
    payload: string;
}


const reducer = (
    state: IRepositoriesState,
    action: ISearchRepositoriesAction | ISearchRepositoriesSuccessAction | ISearchRepositoriesErrorAction
): IRepositoriesState => {
    switch (action.type) {
        case 'search_repositories':
            return {
                loading: true, error: null, data: []
            };
        case 'search_repositories_success':
            return {loading: false, error: null, data: action.payload}
        case 'search_repositories_error':
            return {loading: false, error: action.payload, data: []}
        default:
            return state;
    }
};

export default reducer;