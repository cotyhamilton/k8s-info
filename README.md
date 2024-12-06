# k8s info helm

Useful for visualizing load balancing among pods, inspired by this article:

https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/#use-pod-fields-as-values-for-environment-variables

```bash
helm upgrade --install \
  --namespace k8s-info \
  --create-namespace \
  k8s-info ./charts/k8s-info
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
