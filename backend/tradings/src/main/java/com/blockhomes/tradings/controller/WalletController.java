package com.blockhomes.tradings.controller;

import com.blockhomes.tradings.dto.BaseResponseBody;
import com.blockhomes.tradings.dto.chat.response.ContractRes;
import com.blockhomes.tradings.dto.wallet.request.CheckWalletReq;
import com.blockhomes.tradings.dto.wallet.request.GetWalletReq;
import com.blockhomes.tradings.dto.wallet.request.ListContractReq;
import com.blockhomes.tradings.dto.wallet.request.RegisterWalletReq;
import com.blockhomes.tradings.dto.wallet.response.CheckWalletRes;
import com.blockhomes.tradings.dto.wallet.response.GetWalletRes;
import com.blockhomes.tradings.dto.wallet.response.ListContractRes;
import com.blockhomes.tradings.dto.wallet.response.RegisterWalletRes;
import com.blockhomes.tradings.service.WalletService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.OK;

@Tag(name = "Wallet")
@RestController
@RequestMapping("/api/v1/wallet")
@RequiredArgsConstructor
@Slf4j
public class WalletController {

    private final WalletService walletService;

    @GetMapping("/check")
    @Operation(
        summary = "지갑 등록 여부 확인",
        description = "해당 신원으로 지갑이 등록되어 있는지 확인합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 등록 (지갑 주소, DID 반환)"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "지갑 주소가 없음 (생성해서 등록 필요)"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<CheckWalletRes> checkWallet(@ModelAttribute @Valid CheckWalletReq req) {
        return ResponseEntity
            .status(OK)
            .body(walletService.checkWallet(req));
    }

    @GetMapping
    @Operation(
        summary = "지갑 정보 가져오기",
        description = "해당 지갑 주소에 해당하는 지갑 정보를 반환합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 등록"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "지갑 정보 없음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<GetWalletRes> getWallet(@ModelAttribute @Valid GetWalletReq req) {
        return ResponseEntity
            .status(OK)
            .body(walletService.getWallet(req));
    }

    @PostMapping
    @Operation(
        summary = "생성된 지갑 등록하기",
        description = "사용자가 지갑을 자체적으로 생성 후 DB에 지갑 정보를 등록합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 등록"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<RegisterWalletRes> registerWallet(@RequestBody @Valid RegisterWalletReq req) {
        return ResponseEntity
            .status(OK)
            .body(walletService.registerWallet(req));
    }

    @DeleteMapping("/{walletAddress}")
    @Operation(
        summary = "지갑 삭제",
        description = "지갑 주소에 해당하는 값을 삭제합니다.",
        responses = {
            @ApiResponse(responseCode = "202", description = "삭제 완료"),
            @ApiResponse(responseCode = "404", description = "지갑 정보 없음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<BaseResponseBody> deleteWallet(@PathVariable String walletAddress) {
        return ResponseEntity
            .status(ACCEPTED)
            .body(walletService.deleteWallet(walletAddress));
    }

    @GetMapping("/contracts")
    @Operation(
        summary = "내가 계약한 계약서 목록 조회",
        description = "내가 계약한 계약서의 목록을 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<ListContractRes> listContracts(@ModelAttribute ListContractReq req) {
        return ResponseEntity
            .status(OK)
            .body(walletService.listContract(req));
    }


    @GetMapping("/contract/{contractNo}")
    @Operation(
        summary = "최종 계약서 주소 조회",
        description = "최종 계약서를 조회합니다.",
        responses = {
            @ApiResponse(responseCode = "200", description = "정상 조회"),
            @ApiResponse(responseCode = "400", description = "요청 매개변수 오류"),
            @ApiResponse(responseCode = "404", description = "계약서가 존재하지 않음"),
            @ApiResponse(responseCode = "500", description = "서버 에러")
        }
    )
    public ResponseEntity<ContractRes> detailContract(@PathVariable Integer contractNo) {
        return ResponseEntity
            .status(OK)
            .body(walletService.detailContract(contractNo));
    }

}
