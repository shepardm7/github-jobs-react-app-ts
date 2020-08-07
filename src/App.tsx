import React, {ChangeEvent, useState} from 'react';
import useFetchJobs from "./useFetchJobs";
import JobComp from "./job";
import JobsPagination from "./JobsPagination";
import SearchForm, {SearchParams} from "./SearchForm";
import Container from 'react-bootstrap/Container';

function App() {
  const [params, setParams] = useState<SearchParams>({description: '', location: '', full_time: false});
  const [page, setPage] = useState(1);
  const {jobs, loading, error, hasNextPage} = useFetchJobs(page, params);

  function handleParamChange(e: ChangeEvent<HTMLInputElement>) {
    const {name: param, value} = e.target;
    setPage(1);
    setParams(prevParams => {
      return {...prevParams, [param]: value};
    });
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange}/>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        return <JobComp key={job.id} job={job}/>
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
    </Container>
  );
}

export default App;
