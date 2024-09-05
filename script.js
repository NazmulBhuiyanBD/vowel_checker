function CheckVowel()
{   let vowelCount=0;
    let text=document.getElementById("inputText").value;
    const vowel=["a","e","i","o","u"];

    text=text.toLowerCase();

    for(let i=0;i<text.length;i++)
    {

        if(vowel.includes(text[i]))
            {
                vowelCount++;
            }
    }
    const result=document.getElementById("result");
    result.textContent="Total Vowels :"+vowelCount;
}

