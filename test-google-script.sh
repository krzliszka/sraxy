#!/bin/bash
echo "Testing Google Script..."
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","attending":"yes","timestamp":"2026-02-12T10:00:00Z"}' \
  https://script.google.com/macros/s/AKfycbxHY10zozTET3XKisDLQ28VyIIAZCNNuJrmlapAij2BaRb_8Fvp9tybLE3OVN98o4o9/exec
