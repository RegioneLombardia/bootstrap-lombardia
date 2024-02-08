input="CHANGELOG.md"
i=0
while IFS= read -r line
do
  start=$(echo $line | cut -d ' ' -f1)
  if [ "$start" = "#" ] || [ "$start" = "##" ]
  then
    if [ $i -ne 0 ]
    then
      break
    fi
  fi
  echo "$line"
  i=$((i+1))
done < "$input"
