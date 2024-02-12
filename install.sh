
# Check if the virtual environment is activated
if [ -z "$VIRTUAL_ENV" ]; then
    # Virtual environment is not activated

    # Check if the virtual environment directory exists
    if [ ! -d "backend/venv" ]; then
        # Virtual environment is not created, create it
        python3 -m venv backend/venv
    fi

    # Activate the virtual environment
    source backend/venv/bin/activate
    pip install -r backend/requirements.txt

    # Deactivate the virtual environment when done
    deactivate
else
    # Virtual environment is already activated
    echo "Virtual environment is already activated."
fi