# Use the official Python image as a base image
FROM python:3.10

# Set the working directory to root
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose port 5000 for the Flask application
EXPOSE 5000

# Define environment variable
ENV FLASK_APP=recommend/app.py

# Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0"]
