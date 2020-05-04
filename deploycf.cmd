cd .\dist\mlmodelsetuppoc
copy ..\..\cf_config\* .
cf login -a <api> -u <username>
cf push
start <app-url>

