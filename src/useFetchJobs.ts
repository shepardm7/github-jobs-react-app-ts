import {useEffect, useReducer} from "react";
import axios, {AxiosResponse} from "axios";
import Job from "./models/Job";

interface ActionMakeRequest {
  type: 'make-request';
}

interface ActionGetData {
  type: 'get-data';
  payload: { jobs: Job[] };
}

interface ActionError {
  type: 'error';
  payload: { error: any };
}

interface ActionUpdateHasNextPage {
  type: 'update-has-next-page';
  payload: { hasNextPage: boolean };
}

type ActionTypes = ActionMakeRequest | ActionGetData | ActionError | ActionUpdateHasNextPage;

const BASE_URL = `${process.env.NODE_ENV === 'development' ? 'https://thingproxy.freeboard.io/fetch/' : 'https://cors-anywhere.herokuapp.com/'}https://jobs.github.com/positions.json/`;

type StateType = {
  jobs: Job[];
  loading: boolean;
  hasNextPage: boolean;
  error?: any;
}

function reducer(state: StateType, action: ActionTypes) {
  switch (action.type) {
    case "make-request":
      return {loading: true, jobs: [], hasNextPage: false};
    case "get-data":
      return {...state, loading: false, jobs: action.payload.jobs};
    case "error":
      return {...state, loading: false, error: action.payload.error, jobs: []}
    case "update-has-next-page":
      return {...state, hasNextPage: action.payload.hasNextPage};
    default:
      return state;
  }
}

export default function useFetchJobs(page: number, params?: { [key: string]: any }): StateType {
  const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true, hasNextPage: false});

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    const cancelToken2 = axios.CancelToken.source();
    dispatch({type: "make-request"});
    axios.get(BASE_URL, {
      cancelToken: cancelToken1.token,
      params: {markdown: true, page: page, ...params}
    }).then((res: AxiosResponse<Job[]>) => {
      dispatch({type: "get-data", payload: {jobs: res.data}})
    }).catch(e => {
      if (axios.isCancel(e)) return;
      dispatch({type: "error", payload: {error: e}});
    });

    axios.get(BASE_URL, {
      cancelToken: cancelToken2.token,
      params: {markdown: true, page: page + 1, ...params}
    }).then((res: AxiosResponse<Job[]>) => {
      dispatch({type: "update-has-next-page", payload: {hasNextPage: res.data.length !== 0}})
    }).catch(e => {
      if (axios.isCancel(e)) return;
      dispatch({type: "error", payload: {error: e}});
    });

    return () => {
      cancelToken1.cancel();
      cancelToken2.cancel();
    }
  }, [params, page]);

  return state;
}
