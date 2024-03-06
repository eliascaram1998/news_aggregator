Running React JS Development with Docker
Prerequisites:

Docker installed and configured.
Steps:

Build the Docker image:
docker build -t news_aggregator .

Run the container:
docker run -it -p 3000:3000 news_aggregator