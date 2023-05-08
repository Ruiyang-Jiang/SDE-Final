@echo off
echo Checking for Vue CLI installation...
if not exist node_modules\.bin\vue.cmd (
  echo Vue CLI not found, installing project dependencies...
  call npm ci
  call npm install -D @vue/cli-service
) else (
  echo Vue CLI already installed.
)
echo.
set /p VUE_APP_CUSTOM_URL="Enter the custom URL: "
echo VUE_APP_CUSTOM_URL=%VUE_APP_CUSTOM_URL%>.env.local
echo.
echo Starting development server...
call node_modules\.bin\vue-cli-service.cmd serve
pause
