<h1> dummy-storage-service </h1>
A key-value based storage microservice writen in node-express.
<h3>API</h3>
<h4>GET /keyValueStore/search?criteriaType={prop.nested}&criteriaValue={value}&criteriaOpertor={operator}&size={size}&page={page}&sortBy={prop.nested}&sortOrder={order}</h4>
Search for values with optional filtering, sorting and pagination.
<h4>Paramaters</h4>
<li><strong>criteriaType</strong> (optional) - Filter values by a specific property. Supports nested properties separated with ".". e.g. "criteriaType=name.last".</li>
<li><strong>criteriaValue</strong> (optional) - A value for criteriaType comparison.</li>
<li><strong>criteriaOpertor</strong> (optional) [equals / biggerThan / smallerThan / contains] - The filtering oparator. Contains supports only array values. e.g. "criteriaType=name.last&criteriaValue=Jackson&criteriaOperator=equals" will filter value to those that contain a name: { last: "Jackson" }.</li>
<li><strong>size</strong> (optional) - Size of the returned results.</li>
<li><strong>page</strong> (optional) - Page of the returned results.</li>
<li><strong>sortBy</strong> (optional) - Sort values by a spesific property. Supports nested properties.</li>
<li><strong>sortOrder</strong> (optional) [DEFAULT=ASC / DESC] - Sort by an ascending or descending order.</li>
