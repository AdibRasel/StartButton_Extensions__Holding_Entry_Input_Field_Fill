document.getElementById("fillBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.id) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          function autoFillForm() {
            // ভূমি জরিপ এবং পরিশোধ সাল ঠিক করা
            const surveySelect = document.getElementById("survey");
            if (surveySelect) {
              surveySelect.value = "12";
              surveySelect.dispatchEvent(new Event('change', { bubbles: true }));
            }

            const paidYearSelect = document.getElementById("paid_year");
            if (paidYearSelect) {
              paidYearSelect.value = "2014";
              paidYearSelect.dispatchEvent(new Event('change', { bubbles: true }));
            }

            // সব <select class="r2UsableLandType"> ধরছি
            const allUsableSelects = document.querySelectorAll("select.r2UsableLandType");

            allUsableSelects.forEach(select => {
              // উপরের DOM-এ 2-3 লেভেল উপর থেকে rendered label পাওয়ার চেষ্টা
              let parent = select.closest("div");
              if (!parent) return;

              let labelSpan = null;

              // কিছু লজিকাল DOM traversal করে .select2-selection__rendered খুঁজে বের করছি
              for (let i = 0; i < 5; i++) {
                parent = parent?.parentElement;
                if (!parent) break;

                labelSpan = parent.querySelector(".select2-selection__rendered");
                if (labelSpan) break;
              }

              if (!labelSpan) return;

              const labelText = labelSpan.textContent?.trim();

              const isHouse = labelText?.includes("বাড়ী");

              select.value = isHouse ? "4" : "3"; // 4 = আবাসিক, 3 = কৃষি২
              select.dispatchEvent(new Event('change', { bubbles: true }));
            });

            // সর্বোচ্চ মিলিয়ে useable_start_year সিলেক্ট করা
            const startYearSelects = document.querySelectorAll('select.useable_start_year');
            const preferredYears = ["২০১৪", "২০১৫", "২০১৬", "২০১৭", "২০১৮", "২০১৯", "২০২০", "২০২১", "২০২২", "২০২৩", "২০২৪", "২০২৫"];

            startYearSelects.forEach(select => {
              let found = false;

              for (const year of preferredYears) {
                for (const option of select.options) {
                  const cleanedText = option.text.replace(/\s/g, '');
                  if (cleanedText.includes(year) && !option.disabled) {
                    select.value = option.value;
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                    found = true;
                    break;
                  }
                }
                if (found) break;
              }

              if (!found) {
                for (const option of select.options) {
                  if (!option.disabled) {
                    select.value = option.value;
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                    break;
                  }
                }
              }
            });
          }

          // ডিলে দিয়ে DOM লোড শেষ হওয়ার জন্য অপেক্ষা
          setTimeout(autoFillForm, 500);
        }
      });
    }
  });
});
