#!/bin/bash
cd /home/kavia/workspace/code-generation/artistryai-27293-4b3a92f7/artistryai
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

