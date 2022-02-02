docker build -t egumet/multi-client:latest -t egumet/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t egumet/multi-server:latest -t egumet/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t egumet/multi-worker:latest -t egumet/multi-worker:$SHA -f ./worker/Dockerfile ./worker
docker push egumet/multi-client:latest
docker push egumet/multi-server:latest
docker push egumet/multi-worker:latest
docker push egumet/multi-client:$SHA
docker push egumet/multi-server:$SHA
docker push egumet/multi-worker:$SHA
kubectl apply -f k8s
kubectl set image deployments/server-deployment server=egumet/multi-server:$SHA
kubectl set image deployments/client-deployment client=egumet/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=egumet/multi-worker:$SHA
