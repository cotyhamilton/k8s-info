# k8s info helm

Useful for visualizing load balancing among pods, inspired by this article:

https://kubernetes.io/docs/tasks/inject-data-application/environment-variable-expose-pod-information/#use-pod-fields-as-values-for-environment-variables

Uses deno just cause

Install

```bash
helm upgrade --install \
  --namespace k8s-info \
  --create-namespace \
  k8s-info oci://ghcr.io/cotyhamilton/k8s-info/charts/k8s-info
```

Expose service

```
kubectl port-forward -n k8s-info service/k8s-info 8000:8000
```

```bash
curl http://localhost:8000
{
  "NodeName": "k3s-agent-0",
  "PodName": "k8s-info-65dccc666-vbcq5",
  "PodNameSpace": "default",
  "PodIP": "10.42.1.21",
  "PodServiceAccount": "default"
}
```
