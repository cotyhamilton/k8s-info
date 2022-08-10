# k8s info

Container image that responds to http requests with environment info from a kubernetes pod.

[cotyhamilton/k8s-info](https://hub.docker.com/repository/docker/cotyhamilton/k8s-info)

Useful for visualizing load balancing among pods, inspired by this article:

https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/#use-pod-fields-as-values-for-environment-variables

Example deployment manifest:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: k8s-info
spec:
  selector:
    matchLabels:
      app: k8s-info
  replicas: 6
  template:
    metadata:
      labels:
        app: k8s-info
    spec:
      containers:
      - name: k8s-info
        image: cotyhamilton/k8s-info:latest
        ports:
        - containerPort: 8080
        env:
        - name: NODE_NAME
          valueFrom:
            fieldRef:
              fieldPath: spec.nodeName
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        - name: POD_IP
          valueFrom:
            fieldRef:
              fieldPath: status.podIP
        - name: POD_SERVICE_ACCOUNT
          valueFrom:
            fieldRef:
              fieldPath: spec.serviceAccountName
```

Example response:

```json
{
  "NodeName": "k3s-agent-0",
  "PodName": "k8s-info-65dccc666-vbcq5",
  "PodNameSpace": "default",
  "PodIP": "10.42.1.21",
  "PodServiceAccount": "default"
}
```