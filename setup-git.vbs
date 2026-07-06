Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

Dim projPath
projPath = "C:\Users\dooly\OneDrive\Documents\Claude\Projects\홈페이지 만들기"

' .git 폴더 삭제
If fso.FolderExists(projPath & "\.git") Then
    fso.DeleteFolder projPath & "\.git", True
End If

' git init + add + commit + push
Dim cmd
cmd = "cmd /c cd /d """ & projPath & """ && " & _
      "git init && " & _
      "git add -A && " & _
      "git commit -m ""Initial commit: French tutor website"" && " & _
      "git branch -M main && " & _
      "git remote add origin https://github.com/dourikim/--------.git && " & _
      "git push -u origin main && " & _
      "echo 완료!"

WshShell.Run cmd, 1, True
MsgBox "GitHub 업로드 완료! 이제 Vercel에서 배포하세요.", 64, "완료"
