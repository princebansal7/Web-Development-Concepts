## Lazy Loading Concept

- **Lazy Loading**
  - In previous examples we were getting the full JS bundle together for all the pages
  - This way have a issue that what if user is just visiting dashboard page, why we are getting Js bundle for all the pages => ideally we should get these bundles inclemently as user goes to other pages
  - That means pages will lazily loads initially and loads as per user requires.
  - This way website becomes more smoother and loads faster.
  - Import like this
      ```jsx
        const Dashboard = lazy(() => import("./components/Dashboard"));
        const Landing = lazy(() => import("./components/Landing"));
      ``` 
  
- **Suspense component**
  - But will give an error when goes from route A to route B or vice versa
     As component are routed and getting loaded sometimes may be slower, we may see refresh page, this is issue
  - when you are using nested routes. make sure you are not loading parent
    component as lazy. there is a chance that child component load faster than
    parent component. which may cause this issue.
  - Another way to fix add Routes in 'Suspense' component (it lets you do
    asynchronous data or component fetching)

      ```jsx
          <Suspense>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Landing />} />
            </Routes>
          </Suspense>
      ```
      OR
      ```jsx
            <Routes>
              <Route
                  path="/dashboard"
                  element={
                      <Suspense>
                          <Dashboard />
                      </Suspense>
                  }
              />
              <Route
                  path="/"
                  element={
                      <Suspense fallback={"loading.."}>
                          <Landing />
                      </Suspense>
                  }
              />
            </Routes>
      ```
- [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/react-js/19.react-lazy-loading/src/App.jsx)