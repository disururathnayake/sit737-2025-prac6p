1. Enable Kubernetes in Docker Desktop

2. Clone the project into your local drive

3. Build and Push Docker Image

        docker build -t my-node-app .
        docker tag my-node-app [your_username]/my-node-app       
        docker push [your_username]/my-node-app
      

4. Set Up Kubernetes Dashboard

        kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml

5. Create Admin User for Dashboard

        kubectl apply -f deployment/dashboard-adminuser.yaml
        kubectl apply -f deployment/cluster_role_binding.yaml

6. Start proxy to access dashboard

        kubectl proxy

7. Login token command

        kubectl -n kubernetes-dashboard create token admin-user

8. Apply all yaml files in Deployment

        kubectl apply -f deployment/

9. Verify pods

        kubectl get pods

10. Test Application

        http://localhost:30036/add?num1=10&num2=5
