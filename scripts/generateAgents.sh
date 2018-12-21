#! /bin/bash

echo "generating agents from mid files ..."
echo "*** Tasks ***"
apiagent-transpiler -d configs/tasks.mid.json -t assets/entity.js > deployments/taskEntity.js
apiagent-transpiler -d configs/tasks.mid.json -t assets/collection.js > deployments/taskCollection.js

echo "*** Tags ***"
apiagent-transpiler -d configs/tags.mid.json -t assets/entity.js > deployments/tagsEntity.js
apiagent-transpiler -d configs/tags.mid.json -t assets/collection.js > deployments/tagsCollection.js

echo "done!"